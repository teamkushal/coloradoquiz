import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent540Component } from './test-component540.component';

describe('TestComponent540Component', () => {
  let component: TestComponent540Component;
  let fixture: ComponentFixture<TestComponent540Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent540Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
