import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3330Component } from './test-component3330.component';

describe('TestComponent3330Component', () => {
  let component: TestComponent3330Component;
  let fixture: ComponentFixture<TestComponent3330Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3330Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
