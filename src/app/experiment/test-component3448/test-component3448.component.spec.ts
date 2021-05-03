import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3448Component } from './test-component3448.component';

describe('TestComponent3448Component', () => {
  let component: TestComponent3448Component;
  let fixture: ComponentFixture<TestComponent3448Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3448Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
