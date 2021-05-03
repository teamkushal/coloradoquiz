import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2251Component } from './test-component2251.component';

describe('TestComponent2251Component', () => {
  let component: TestComponent2251Component;
  let fixture: ComponentFixture<TestComponent2251Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2251Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
