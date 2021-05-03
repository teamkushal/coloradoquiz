import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2948Component } from './test-component2948.component';

describe('TestComponent2948Component', () => {
  let component: TestComponent2948Component;
  let fixture: ComponentFixture<TestComponent2948Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2948Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
