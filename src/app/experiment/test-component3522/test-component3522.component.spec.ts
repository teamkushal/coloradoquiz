import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3522Component } from './test-component3522.component';

describe('TestComponent3522Component', () => {
  let component: TestComponent3522Component;
  let fixture: ComponentFixture<TestComponent3522Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3522Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
