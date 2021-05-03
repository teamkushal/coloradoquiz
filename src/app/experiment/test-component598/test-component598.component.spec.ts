import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent598Component } from './test-component598.component';

describe('TestComponent598Component', () => {
  let component: TestComponent598Component;
  let fixture: ComponentFixture<TestComponent598Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent598Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
