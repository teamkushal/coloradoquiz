import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3165Component } from './test-component3165.component';

describe('TestComponent3165Component', () => {
  let component: TestComponent3165Component;
  let fixture: ComponentFixture<TestComponent3165Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3165Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
