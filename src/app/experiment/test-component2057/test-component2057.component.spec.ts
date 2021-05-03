import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2057Component } from './test-component2057.component';

describe('TestComponent2057Component', () => {
  let component: TestComponent2057Component;
  let fixture: ComponentFixture<TestComponent2057Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2057Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
