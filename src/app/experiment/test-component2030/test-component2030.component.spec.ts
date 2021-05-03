import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2030Component } from './test-component2030.component';

describe('TestComponent2030Component', () => {
  let component: TestComponent2030Component;
  let fixture: ComponentFixture<TestComponent2030Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2030Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
