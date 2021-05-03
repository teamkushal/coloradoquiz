import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent729Component } from './test-component729.component';

describe('TestComponent729Component', () => {
  let component: TestComponent729Component;
  let fixture: ComponentFixture<TestComponent729Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent729Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
