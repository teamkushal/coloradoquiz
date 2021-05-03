import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent381Component } from './test-component381.component';

describe('TestComponent381Component', () => {
  let component: TestComponent381Component;
  let fixture: ComponentFixture<TestComponent381Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent381Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
