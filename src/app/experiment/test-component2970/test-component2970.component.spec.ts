import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2970Component } from './test-component2970.component';

describe('TestComponent2970Component', () => {
  let component: TestComponent2970Component;
  let fixture: ComponentFixture<TestComponent2970Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2970Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
