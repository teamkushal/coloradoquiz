import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent902Component } from './test-component902.component';

describe('TestComponent902Component', () => {
  let component: TestComponent902Component;
  let fixture: ComponentFixture<TestComponent902Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent902Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
