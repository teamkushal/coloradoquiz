import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent939Component } from './test-component939.component';

describe('TestComponent939Component', () => {
  let component: TestComponent939Component;
  let fixture: ComponentFixture<TestComponent939Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent939Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
