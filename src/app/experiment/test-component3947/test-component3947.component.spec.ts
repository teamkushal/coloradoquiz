import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3947Component } from './test-component3947.component';

describe('TestComponent3947Component', () => {
  let component: TestComponent3947Component;
  let fixture: ComponentFixture<TestComponent3947Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3947Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
