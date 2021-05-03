import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent565Component } from './test-component565.component';

describe('TestComponent565Component', () => {
  let component: TestComponent565Component;
  let fixture: ComponentFixture<TestComponent565Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent565Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
