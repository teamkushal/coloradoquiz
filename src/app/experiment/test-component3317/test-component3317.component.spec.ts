import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3317Component } from './test-component3317.component';

describe('TestComponent3317Component', () => {
  let component: TestComponent3317Component;
  let fixture: ComponentFixture<TestComponent3317Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3317Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
