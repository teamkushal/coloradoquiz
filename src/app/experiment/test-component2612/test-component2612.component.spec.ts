import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2612Component } from './test-component2612.component';

describe('TestComponent2612Component', () => {
  let component: TestComponent2612Component;
  let fixture: ComponentFixture<TestComponent2612Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2612Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
