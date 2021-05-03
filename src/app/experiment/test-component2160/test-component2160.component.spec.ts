import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2160Component } from './test-component2160.component';

describe('TestComponent2160Component', () => {
  let component: TestComponent2160Component;
  let fixture: ComponentFixture<TestComponent2160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2160Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
