import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2892Component } from './test-component2892.component';

describe('TestComponent2892Component', () => {
  let component: TestComponent2892Component;
  let fixture: ComponentFixture<TestComponent2892Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2892Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
