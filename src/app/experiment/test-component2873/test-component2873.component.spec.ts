import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2873Component } from './test-component2873.component';

describe('TestComponent2873Component', () => {
  let component: TestComponent2873Component;
  let fixture: ComponentFixture<TestComponent2873Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2873Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
