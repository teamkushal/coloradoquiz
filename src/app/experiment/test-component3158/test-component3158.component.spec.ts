import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3158Component } from './test-component3158.component';

describe('TestComponent3158Component', () => {
  let component: TestComponent3158Component;
  let fixture: ComponentFixture<TestComponent3158Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3158Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
