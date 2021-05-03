import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3726Component } from './test-component3726.component';

describe('TestComponent3726Component', () => {
  let component: TestComponent3726Component;
  let fixture: ComponentFixture<TestComponent3726Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3726Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
