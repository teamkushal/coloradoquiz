import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2419Component } from './test-component2419.component';

describe('TestComponent2419Component', () => {
  let component: TestComponent2419Component;
  let fixture: ComponentFixture<TestComponent2419Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2419Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
