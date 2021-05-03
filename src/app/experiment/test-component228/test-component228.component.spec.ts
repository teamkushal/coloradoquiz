import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent228Component } from './test-component228.component';

describe('TestComponent228Component', () => {
  let component: TestComponent228Component;
  let fixture: ComponentFixture<TestComponent228Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent228Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
