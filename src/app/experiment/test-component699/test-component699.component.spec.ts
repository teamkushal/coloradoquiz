import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent699Component } from './test-component699.component';

describe('TestComponent699Component', () => {
  let component: TestComponent699Component;
  let fixture: ComponentFixture<TestComponent699Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent699Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
