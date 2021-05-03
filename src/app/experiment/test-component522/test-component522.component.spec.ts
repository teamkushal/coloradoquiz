import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent522Component } from './test-component522.component';

describe('TestComponent522Component', () => {
  let component: TestComponent522Component;
  let fixture: ComponentFixture<TestComponent522Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent522Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
