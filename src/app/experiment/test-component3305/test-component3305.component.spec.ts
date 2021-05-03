import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3305Component } from './test-component3305.component';

describe('TestComponent3305Component', () => {
  let component: TestComponent3305Component;
  let fixture: ComponentFixture<TestComponent3305Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3305Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
