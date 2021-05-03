import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent257Component } from './test-component257.component';

describe('TestComponent257Component', () => {
  let component: TestComponent257Component;
  let fixture: ComponentFixture<TestComponent257Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent257Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
