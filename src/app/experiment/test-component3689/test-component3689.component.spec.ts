import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3689Component } from './test-component3689.component';

describe('TestComponent3689Component', () => {
  let component: TestComponent3689Component;
  let fixture: ComponentFixture<TestComponent3689Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3689Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
