import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent724Component } from './test-component724.component';

describe('TestComponent724Component', () => {
  let component: TestComponent724Component;
  let fixture: ComponentFixture<TestComponent724Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent724Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
