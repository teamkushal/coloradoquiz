import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2474Component } from './test-component2474.component';

describe('TestComponent2474Component', () => {
  let component: TestComponent2474Component;
  let fixture: ComponentFixture<TestComponent2474Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2474Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
