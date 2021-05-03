import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2709Component } from './test-component2709.component';

describe('TestComponent2709Component', () => {
  let component: TestComponent2709Component;
  let fixture: ComponentFixture<TestComponent2709Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2709Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
