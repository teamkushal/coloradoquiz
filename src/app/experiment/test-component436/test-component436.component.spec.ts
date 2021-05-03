import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent436Component } from './test-component436.component';

describe('TestComponent436Component', () => {
  let component: TestComponent436Component;
  let fixture: ComponentFixture<TestComponent436Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent436Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
