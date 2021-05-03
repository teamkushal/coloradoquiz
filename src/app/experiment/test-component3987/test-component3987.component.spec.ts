import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3987Component } from './test-component3987.component';

describe('TestComponent3987Component', () => {
  let component: TestComponent3987Component;
  let fixture: ComponentFixture<TestComponent3987Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3987Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
