import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2522Component } from './test-component2522.component';

describe('TestComponent2522Component', () => {
  let component: TestComponent2522Component;
  let fixture: ComponentFixture<TestComponent2522Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2522Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
