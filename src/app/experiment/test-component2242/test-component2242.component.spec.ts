import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2242Component } from './test-component2242.component';

describe('TestComponent2242Component', () => {
  let component: TestComponent2242Component;
  let fixture: ComponentFixture<TestComponent2242Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2242Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
