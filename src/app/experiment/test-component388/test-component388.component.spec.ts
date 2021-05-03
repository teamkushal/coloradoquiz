import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent388Component } from './test-component388.component';

describe('TestComponent388Component', () => {
  let component: TestComponent388Component;
  let fixture: ComponentFixture<TestComponent388Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent388Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
