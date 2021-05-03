import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3579Component } from './test-component3579.component';

describe('TestComponent3579Component', () => {
  let component: TestComponent3579Component;
  let fixture: ComponentFixture<TestComponent3579Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3579Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
