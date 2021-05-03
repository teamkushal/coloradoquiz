import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent311Component } from './test-component311.component';

describe('TestComponent311Component', () => {
  let component: TestComponent311Component;
  let fixture: ComponentFixture<TestComponent311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent311Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
