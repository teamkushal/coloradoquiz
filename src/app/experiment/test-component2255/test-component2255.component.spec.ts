import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2255Component } from './test-component2255.component';

describe('TestComponent2255Component', () => {
  let component: TestComponent2255Component;
  let fixture: ComponentFixture<TestComponent2255Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2255Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
