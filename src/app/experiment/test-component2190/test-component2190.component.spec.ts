import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2190Component } from './test-component2190.component';

describe('TestComponent2190Component', () => {
  let component: TestComponent2190Component;
  let fixture: ComponentFixture<TestComponent2190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
