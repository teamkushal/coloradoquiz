import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3044Component } from './test-component3044.component';

describe('TestComponent3044Component', () => {
  let component: TestComponent3044Component;
  let fixture: ComponentFixture<TestComponent3044Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3044Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
