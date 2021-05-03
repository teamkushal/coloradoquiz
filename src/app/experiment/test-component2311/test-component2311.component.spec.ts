import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2311Component } from './test-component2311.component';

describe('TestComponent2311Component', () => {
  let component: TestComponent2311Component;
  let fixture: ComponentFixture<TestComponent2311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2311Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
