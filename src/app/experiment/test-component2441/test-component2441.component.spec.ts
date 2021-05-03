import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2441Component } from './test-component2441.component';

describe('TestComponent2441Component', () => {
  let component: TestComponent2441Component;
  let fixture: ComponentFixture<TestComponent2441Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2441Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
