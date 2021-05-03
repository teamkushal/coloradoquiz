import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2800Component } from './test-component2800.component';

describe('TestComponent2800Component', () => {
  let component: TestComponent2800Component;
  let fixture: ComponentFixture<TestComponent2800Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2800Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
