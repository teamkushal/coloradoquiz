import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2056Component } from './test-component2056.component';

describe('TestComponent2056Component', () => {
  let component: TestComponent2056Component;
  let fixture: ComponentFixture<TestComponent2056Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2056Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
