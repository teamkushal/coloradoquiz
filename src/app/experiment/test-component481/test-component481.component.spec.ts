import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent481Component } from './test-component481.component';

describe('TestComponent481Component', () => {
  let component: TestComponent481Component;
  let fixture: ComponentFixture<TestComponent481Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent481Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
