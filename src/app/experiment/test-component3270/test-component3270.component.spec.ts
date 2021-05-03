import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3270Component } from './test-component3270.component';

describe('TestComponent3270Component', () => {
  let component: TestComponent3270Component;
  let fixture: ComponentFixture<TestComponent3270Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3270Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
