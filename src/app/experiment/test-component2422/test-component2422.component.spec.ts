import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2422Component } from './test-component2422.component';

describe('TestComponent2422Component', () => {
  let component: TestComponent2422Component;
  let fixture: ComponentFixture<TestComponent2422Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2422Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
