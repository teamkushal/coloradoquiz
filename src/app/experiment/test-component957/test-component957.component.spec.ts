import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent957Component } from './test-component957.component';

describe('TestComponent957Component', () => {
  let component: TestComponent957Component;
  let fixture: ComponentFixture<TestComponent957Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent957Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
