import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3176Component } from './test-component3176.component';

describe('TestComponent3176Component', () => {
  let component: TestComponent3176Component;
  let fixture: ComponentFixture<TestComponent3176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3176Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
